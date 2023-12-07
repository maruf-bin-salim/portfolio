import Head from "next/head";

export default function MainPage() {
  return (
    <div style={{ backgroundColor: "#0F0D13", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Head>
        <title>Home</title>
      </Head>
      <img src="/self_potrait.png" alt="pfp" style={{ height: "250px", width: "250px", border: "2px solid #ebebeb20", padding: "5px", borderRadius: "50%"}} />
    </div>
  );
}