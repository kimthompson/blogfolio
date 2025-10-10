import QRCode from '~/components/svgs/qr-code'
import LogoMinimal from '~/components/svgs/logo-minimal'
import nameCursive from '../assets/name-cursive.svg'

export default function BusinessCards() {
  return (
    <div className="hidden md:flex card">
      <h1 className="text-2xl font-cascadia font-semibold text-center mt-8 mb-4">Business Cards</h1>
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <div className="w-[580px] h-[252px] bg-[#16181a] m-0 px-11 pt-2 pb-4 text-[20px]">
          <div className="flex flex-row w-full h-full">
            <div className="flex flex-col items-start flex-1 w-full h-full -mt-3">
              <img
                // @ts-ignore
                src={nameCursive}
                id="logo"
                className="w-88 -m-4 -mb-12" />
              <p className="text-white font-cascadia">Web/Mobile Developer</p>
            </div>
            <QRCode className="w-40 -mt-9 -mr-5" background="#16181a" fill="#7b8496" />
          </div>
          <p className="text-white font-cascadia -mt-12">952.215.7255 <span className="text-[#ff5ea0]">| kim.freechack@proton.me</span></p>
        </div>
        <div className="w-[580px] h-[252px] bg-gradient-to-r from-[#5ea1ff] to-[#ff5ea0] z-0 flex flex-row items-center justify-center">
          {/* <div className="w-[580px] h-[252px] bg-gradient-to-r from-[#ff6e5e] to-[#5eff6c]"> */}
          {/* <div className="w-[580px] h-[252px] bg-gradient-to-r from-[#ff6e5e] to-[#bd5eff]"> */}
          {/* <div className="w-[580px] h-[252px] bg-gradient-to-r from-[#f1ff5e] to-[#ff5ef1]"> */}
          <LogoMinimal
            id="logo"
            className="w-24 md:w-48"
            compassColor='fill-black stroke-black'
            kColor='fill-black stroke-black'
            lColor='fill-black stroke-black'
            jColor='fill-black stroke-black'
            hColor='fill-black stroke-black'
          />
        </div>
      </div>
    </div>
  )
}
