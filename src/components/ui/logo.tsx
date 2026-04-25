type LogoProps = React.SVGAttributes<SVGElement>

export function Logo(props: LogoProps) {
  return (
    <svg
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 640 715'
      fill='none'
      stroke='currentColor'
      strokeWidth='60'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M500 150C450 50 250 50 150 150C50 250 50 450 150 550C250 650 450 650 500 550' />
    </svg>
  )
}
