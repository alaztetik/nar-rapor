import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Font,
    Image,
} from "@react-pdf/renderer";

Font.register({
    family: "EB Garamond",
    src: "https://fonts.gstatic.com/s/ebgaramond/v14/SlGUmQSNjdsmc35JDF1K5FRy.ttf",
});

const styles = StyleSheet.create({
    body: {
        flexDirection: "column",
        backgroundColor: "#E4E4E4",
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
        fontFamily: "EB Garamond",
    },
    header: {
        textAlign: "center",
    },
    title: {
        fontSize: 24,
    },
    author: {
        marginTop: 5,
        fontSize: 16,
    },
    subheader: {
        fontSize: 14,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    department: {
        marginRight: 10,
    },
    date: {
        marginLeft: 10,
    },
    paragraphs: {
        fontSize: 12,
    },
    images: {
        marginTop: 10,
    },
});

const PDFDocumentComponent = ({ reportMetaData, reportBodyText }) => {
    const [paragraphs, images] = stringToArray(reportBodyText);

    const paragraphsArray = [];
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphsArray.push(
            <Text style={styles.text}>{paragraphs[i].innerText}</Text>
        );
    }

    const imagesArray = [];
    for (let i = 0; i < images.length; i++) {
        imagesArray.push(
            <Image
                src={images[i].src}
                style={{ width: "100%", marginBottom: 5 }}
                alt="image"
            />
        );
    }

    return (
        <Document>
            {
                <Page size="A4" style={styles.body}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{reportMetaData.title}</Text>
                        <Text style={styles.author}>
                            {reportMetaData.author}
                        </Text>
                    </View>
                    <View style={styles.subheader}>
                        <Text style={styles.department}>
                            {reportMetaData.department}
                        </Text>
                        <Text>|</Text>
                        <Text style={styles.date}>{reportMetaData.date}</Text>
                    </View>
                    <View style={styles.paragraphs}>{paragraphsArray}</View>
                    <View style={[styles.header, { fontSize: 12 }]}>
                        <Text>Ek Fotoğraflar</Text>
                    </View>
                    <View style={styles.images}>{imagesArray}</View>
                </Page>
            }
        </Document>
    );
};

export default PDFDocumentComponent;

function stringToArray(text) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    const children = doc.body.children;
    const returnArray = [];
    const imgagesArray = [];
    for (let i = 0; i < children.length; i++) {
        returnArray.push(children[i]);
    }

    // check if there are any img tags inside the p tags:
    for (let i = 0; i < returnArray.length; i++) {
        if (returnArray[i].tagName === "P") {
            if (returnArray[i].innerHTML.includes("<img")) {
                imgagesArray.push(returnArray[i].children[0]);
            }
        }
    }

    console.log("RETURN ARRAY:", returnArray);
    console.log("IMAGES ARRAY:", imgagesArray);

    return [returnArray, imgagesArray];
}
