import { StyleSheet} from 'react-native';
import { Camera, CameraView } from 'expo-camera';
import BarcodeMask from 'react-native-barcode-mask';

export default function App() {

  React.useEffect(() => {
          (async () => {
               const { status } = await Camera.requestCameraPermissionsAsync();
          })();
     }, []);
  const handleBarCodeScanned = ({ type, data }) => {
    console.log("Barcode scanned!");        
    console.log(data);
    console.log(type);
  };
  return (
    <CameraView onBarcodeScanned={handleBarCodeScanned} style={[StyleSheet.absoluteFillObject, styles.container]} barcodeScannerSettings={{ barcodeTypes: allowedBarcodes }}>
        <BarcodeMask edgeColor="#62B1F6" showAnimatedLine={false} />
    </CameraView>
  );
}
