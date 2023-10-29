import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
    },
    section: {
        fontSize: 12,
        margin: 10,
        padding: 10,
        flexGrow: 1,
        backgroundColor: "tomato"
    },
});

const PDFDocumentComponent = () => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Section 1</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rerum officiis deleniti voluptatum beatae, pariatur eum facilis ullam tenetur neque deserunt saepe qui obcaecati dolor, esse fuga magni maxime porro?</Text>
                </View>
            </Page>
        </Document>
    );
}

export default PDFDocumentComponent;