import DiscoverSection from "../../DiscoverSection";
import { HOME_TOOLBOX_MENU } from '../../../constants'

export default function HomeToolboxSection() {
  return (
    <DiscoverSection
      page='home-toolbox'
      title='Toolbox'
      activeColor='#8254A9'
      menuItems={HOME_TOOLBOX_MENU}
    />
  )
}