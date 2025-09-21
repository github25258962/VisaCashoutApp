import { IMAGES } from "../components/icons";
import { BottomTabParamList } from "../types/navigation";

export const TABS: {
    name: keyof BottomTabParamList;
    label: string;
    icon: React.FC<any>;
}[] = [
        { name: 'Home', label: 'Loyalty', icon: IMAGES.SVG.homeIcon },
        { name: 'Offers', label: 'Offers', icon: IMAGES.SVG.briefcaseIcon },
        { name: 'Cashout', label: 'Cashout', icon: IMAGES.SVG.cashIcon },
        { name: 'Settings', label: 'Settings', icon: IMAGES.SVG.settingsIcon },
    ];
