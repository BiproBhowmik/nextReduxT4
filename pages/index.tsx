import type { NextPage } from 'next'

import FormSection from '../components/formSection'
import CardSection from '../components/cardSection'

const Home: NextPage = () => {
  return (
    <div>
      <FormSection />
      <CardSection />
    </div>
  )
}

export default Home
