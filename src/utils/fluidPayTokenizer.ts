import Tokenizer, { Constructor } from 'fluidpay-tokenizer'

const fluidPayTokenizer = ({
  settings,
  isFluidPayDevMode,
  ...options
}: Constructor & { isFluidPayDevMode: boolean }) =>
  new Tokenizer({
    url: `https://${isFluidPayDevMode ? 'sandbox' : 'app'}.fluidpay.com`,
    settings: {
      styles: {
        body: {
          color: '#6c757d'
        },
        '.card': {
          padding: '2px'
        },
        input: {
          'font-family': 'Poppins, sans-serif',
          display: 'block',
          width: '100%',
          height: '44px',
          padding: '0 12px',
          'letter-spacing': '0.009rem',
          'font-size': '16px',
          'font-weight': 400,
          color: '#34495E',
          'background-color': '#fff',
          'background-clip': 'padding-box',
          border: '2px solid #eaeff3',
          'border-radius': '3px',
          transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
        },
        'input:focus': {
          color: '#34495E',
          'background-color': '#fff',
          'border-color': '#afcbfb',
          outline: 0,
          'box-shadow': '0 0 0 2px rgb(54 123 245 / 25%)'
        },
        '.card .cc .cc-icon': {
          left: '10px',
          height: '49px'
        },
        'input.invalid': {
          border: '2px solid #f25252',
          color: '#f25252'
        },
        'input.invalid:focus': {
          'border-color': '#f25252',
          'box-shadow': '0 0 0 0.2rem rgb(242 82 82 / 25%)'
        },
        '.card>div:not(:last-child):not(.break)': {
          padding: '0 15px 15px 0'
        }
      },
      ...settings
    },
    ...options
  })

export default fluidPayTokenizer
