import { useState } from "react"

export const QrCode = () => {
    const [img, setImg] = useState("");
    const [loading ,setLoading] = useState(false);
    const [qrdata , setQrData] = useState("https://www.linkedin.com/in/bagavath-ravichandran-ba5b38321/");
    const [qrsize, setQrsize]= useState("150");


   async function GenerateQr(){
        setLoading(true);
        try{
            const url= `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
            setImg(url);
        }
        catch(error){
            console.error("Error generating QR code" ,error);
        }
        finally{
            setLoading(false);
        }
    }
    function DownloadQr(){
        fetch(img)
        .then((response)=>response.blob())
        .then((blob)=>{
            const link=document.createElement("a");
            link.href=URL.createObjectURL(blob);
            link.download="qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch((error)=>{
            console.error("Error downloading QR code",error);
        })
    }
  return (
    <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        {img && <img src={img} className="image"  />}
        {loading && <p>Please wait.....</p>}
        <div>
            <label htmlFor="datainput" className="input-label">Data for Qr code</label>
            <input type="text" id="datainput" value={qrdata} placeholder="Enter a valid data" onChange={(e)=>setQrData(e.target.value)} />      
            <label htmlFor="sizeinput" className="input-label">Image size (e.g.,150)</label>
            <input type="text" id="sizeinput" value={qrsize}  placeholder="Enter a image size" onChange={(e)=> setQrsize(e.target.value)} />
            <button className="generate-button" disabled={loading} onClick={GenerateQr} >Generate QR Code</button>
            <button className="download-button" onClick={DownloadQr}>Download QR Code</button>
        </div>
        <p className="footer">Designed by <a href="https://www.linkedin.com/in/bagavath-ravichandran-ba5b38321/">Bagavath</a></p>
    </div>
  )
}

