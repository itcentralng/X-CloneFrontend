import { X } from 'lucide-react'

function Modal({onClose, children}) {
  
  return (
    <div className='w-full h-screen fixed inset-0 flex items-center justify-center pt-4 z-50'>
      <div className='w-[550px] min-h-[500px] shadow bg-black rounded-xl'>
         <button onClick={onClose} className='p-4 hover:cursor-pointer top-4 right-4'>
          <X />
         </button>

         {children}
      </div>
    </div>
  )
}

export default Modal