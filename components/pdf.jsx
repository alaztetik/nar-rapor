import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Font,
    Image
} from "@react-pdf/renderer";

Font.register({
    family: "EB Garamond",
    src: "https://fonts.gstatic.com/s/ebgaramond/v14/SlGUmQSNjdsmc35JDF1K5FRy.ttf",
});

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
    },
    section: {
        fontSize: 12,
        margin: 20,
        padding: 5,
        flexGrow: 1,
    },
    header: {
        fontSize: 15,
        marginBottom: 10,
        textAlign: "center",
        color: "#333",
    },
    text: {
        margin: 5,
        fontSize: 12,
        textAlign: "justify",
        color: "#333",
        fontFamily: "EB Garamond",
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
                style={{ width: 200, height: 200 }}
                alt="image"
            />
        );
    }


    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.header}>Section 1</Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error rerum officiis deleniti voluptatum beatae,
                        pariatur eum facilis ullam tenetur neque deserunt saepe
                        qui obcaecati dolor, esse fuga magni maxime porro?
                    </Text>
                    {paragraphsArray}

                    {imagesArray}
                </View>
            </Page>
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







