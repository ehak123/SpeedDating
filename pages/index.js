import { metadataDescription } from '../data/metadata'
import StartViewHeader from '../components/startview/startviewheader'
import StartView from '../components/startview/startview'

export default function StartPageView({ allPostsData }) {
  return (
    <>
      <StartViewHeader size="large" />
      <StartView news="off">
        <p>{metadataDescription}</p>
      </StartView>
    </>
  )
}