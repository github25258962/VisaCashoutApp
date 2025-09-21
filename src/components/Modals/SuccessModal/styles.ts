import { StyleSheet } from "react-native";

export default StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.45)",
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        width: "85%",
        backgroundColor: "white",
        borderRadius: 12,
        padding: 20
    },
    title: { fontSize: 18, fontWeight: "700", marginBottom: 8 },
    message: { fontSize: 14, marginBottom: 16 },
    row: { flexDirection: "row", justifyContent: "flex-end" },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8,
        backgroundColor: "#eee",
        marginLeft: 8
    },
    primary: {
        backgroundColor: "#FF8A00"
    },
    primaryText: {
        color: "#fff",
        fontWeight: "700"
    }
});
