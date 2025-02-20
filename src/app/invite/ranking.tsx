import Image from 'next/image'
import medalCooper from '../../assets/medal_cooper.svg'
import metalGold from '../../assets/medal_gold.svg'
import medalSilver from '../../assets/medal_silver.svg'

export default function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-5 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Levi Andrade
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image
            className="absolute top-0 right-8"
            src={metalGold}
            alt="medalha de ouro"
            width={50}
            height={50}
          />
        </div>
      </div>
      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-5 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Levi Andrade
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image
            className="absolute top-0 right-8"
            src={medalSilver}
            alt="medalha de prata"
            width={50}
            height={50}
          />
        </div>
      </div>
      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-5 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Levi Andrade
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image
            className="absolute top-0 right-8"
            src={medalCooper}
            alt="medalha de bronze"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  )
}
