import { Img, Section } from '@react-email/components'

function Logo() {
  return (
    <Section className='mb-6'>
      <Img
        src='https://charlessdev.vercel.app/images/avatar.png'
        alt="CharlessDev logo"
        width='48'
        height='48'
        className='rounded-full'
      />
    </Section>
  )
}

export default Logo
