import code from "../../Video/code.mp4"

export default function MainVideo() {

    return (
          <video className="w-96 h-56 object-cover rounded-xl" src={code} autoPlay loop muted playsInline/>
    )
}