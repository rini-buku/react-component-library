import addons from '@storybook/addons'
import { STORY_RENDERED } from '@storybook/core-events'

const getStoryData = (api) => {
  try {
    const storyData = api.getCurrentStoryData()
    console.log(storydata,'xxxstorydata')
    return storyData
  } catch (e) {
    return null
  }
}

addons.register('TitleAddon', (api) => {
  const cunstomTitle = 'Sachet - Web Component Library by BukuWarung'
  let interval = null

  const setTitle = async () => {
    clearTimeout(interval)
    const storyData = await getStoryData(api)
    console.log(storyData,"xx1")
    const title = !storyData
      ? cunstomTitle
      : `${storyData.kind} - ${storyData.name} ⋅ ${cunstomTitle}`

    if (document.title !== title) {
      document.title = title
    }

    interval = setTimeout(setTitle, 100)
  }

  setTitle()

  api.on(STORY_RENDERED, () => {
    setTitle()
  })
})
