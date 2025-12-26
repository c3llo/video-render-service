import { AbsoluteFill } from "remotion";

export const MyVideo = ({ title }: { title: string }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "black",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 80,
      }}
    >
      {title}
    </AbsoluteFill>
  );
};
