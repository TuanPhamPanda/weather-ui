import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/navigation-container';

type NavigationType = StackNavigationProp<RootStackParamList>;

const useRouter = (): NavigationType => useNavigation<NavigationType>();

export default useRouter;
