import { CopyToClipboard } from 'react-copy-to-clipboard'
import toast, { Toaster } from 'react-hot-toast'
import iconCopy from "../assets/icons/IconCopy.svg"
type PropTypes = {
  stateCopy: string
}

const BtnCopy = ({ stateCopy }: PropTypes) => {
  return (
    <div>
      <CopyToClipboard text={stateCopy}>
        <button
          onClick={() =>
            toast.success('Texto copiado', {
              position: 'bottom-right',
              duration: 1500,
            })
          }
          className="bg-gray-300 text-gray-800 font-bold py-2 px-2 rounded items-center inline-flex"
        >
          <img className="w-8 h-8" src={iconCopy} alt="boton copiar" />
        </button>
      </CopyToClipboard>

      <Toaster />
    </div>
  )
}

export default BtnCopy
