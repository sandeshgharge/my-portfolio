import { Tabs } from '@/components/v1/state-tabs/Tabs'
import { TabList } from '@/components/v1/state-tabs/TabList'
import { TabPanel } from '@/components/v1/state-tabs/TabPanel'
import { portfolioTabs } from '@/data/tabs'
import { name } from '@/data/personalDetails'

import About from '@/components/v1/sections/About'
import Experience from '@/components/v1/sections/Experience'
import Education from '@/components/v1/sections/Education'
import Skills from '@/components/v1/sections/Skills'
import Projects from '@/components/v1/sections/Projects'
import Hobbies from '@/components/v1/sections/Hobbies'
import MeetMe from '@/components/v1/sections/MeetMe'
import Footer from '../elements/Footer'

export default function StateLayout() {
  return (
    <div>

    <Tabs defaultTab="about">
      {/* Top Bar */}
      <div className="tabs-wrapper">
    <TabList tabs={portfolioTabs} />
  </div>

      {/* Panels */}
      <TabPanel when="about"><About /></TabPanel>
      <TabPanel when="experience"><Experience /></TabPanel>
      <TabPanel when="education"><Education /></TabPanel>
      <TabPanel when="skills"><Skills /></TabPanel>
      <TabPanel when="projects"><Projects /></TabPanel>
      <TabPanel when="hobbies"><Hobbies /></TabPanel>
      <TabPanel when="meet"><MeetMe /></TabPanel>
    </Tabs>
    <Footer />
    </div>
  )
}
