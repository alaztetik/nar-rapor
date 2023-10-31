import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

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
    },
});

const PDFDocumentComponent = ({ reportMetaData, reportBodyText }) => {

    console.log("PDF:", reportBodyText);

    //TODO separate image and paragraph and render them separately
    const BodyTextAsPDFTextComponent = reportBodyText
        .split("\n")
        .map((item, key) => {
            return (
                <Text key={key} style={styles.text}>
                    {item}
                </Text>
            );
        });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.header}>Section 1</Text>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error rerum officiis deleniti voluptatum beatae,
                        pariatur eum facilis ullam tenetur neque deserunt saepe
                        qui obcaecati dolor, esse fuga magni maxime porro?
                    </Text>
                    
                    {BodyTextAsPDFTextComponent}
                    
                </View>
            </Page>
        </Document>
    );
};

export default PDFDocumentComponent;
