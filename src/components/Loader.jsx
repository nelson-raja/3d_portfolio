import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { Progress} = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p style={{
        fontSize: 14,
        color:'#f1f1f1',
        fontWeight:800,
        marginTop:40
      }}>
        {Progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader