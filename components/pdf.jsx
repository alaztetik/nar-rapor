import { Page, Text, View, Document, StyleSheet, Link } from "@react-pdf/renderer";

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
});

const PDFDocumentComponent = () => {
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
                    <Link src="https://narkaucuk.com">
                        Visit Nar Kauçuk Website
                    </Link>
                </View>
            </Page>
        </Document>
    );
};

export default PDFDocumentComponent;
