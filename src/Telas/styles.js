import { StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: theme.cores.branco,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: -100,
    height: 400,
    marginBottom: 80

},
});