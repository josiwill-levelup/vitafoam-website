import { useState } from 'react'
import { Gift, MessageCircle, ArrowRight } from 'lucide-react'

const collections = [
  'Vita Corona', 'Vita Grand', 'Vita Shine', 'Spring mattress',
  'Bedsheets, duvets and pillows', 'Sheetings and cushions', 'Help me choose',
]

export default function ChristmasCampaign() {
  const [product, setProduct] = useState(collections[0])
  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [recipient, setRecipient] = useState('Shopping for myself / my household')
  const message = [
    'Hello Vitafoam Brookfields! I am enquiring through the Christmas Comfort website campaign (XMAS26).',
    'Product: ' + product,
    'Size / specification: ' + (size.trim() || 'Please advise'),
    'Quantity: ' + quantity,
    recipient,
    'Please confirm stock, total price and delivery or collection. I will arrange payment directly with your team.',
  ].join('\n')
  const whatsapp = 'https://wa.me/23276271771?text=' + encodeURIComponent(message)

  return (
    <section id="christmas" aria-labelledby="christmas-title" className="scroll-mt-24 bg-[#FFF8F0] py-12 lg:py-20">
      <div className="container-main">
        <div className="overflow-hidden rounded-3xl bg-[#2D1B69] text-white p-6 sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#FFD6A5]">
                <Gift size={20} aria-hidden="true" /> CHRISTMAS 2026 · BROOKFIELDS
              </div>
              <h2 id="christmas-title" className="mt-4 font-display text-4xl sm:text-5xl leading-tight">
                Christmas Comfort
              </h2>
              <p className="mt-4 text-xl font-medium text-[#FFD6A5]">Give the gift of comfort this Christmas.</p>
              <p className="mt-4 text-white/90 leading-relaxed">
                Shop from home in Sierra Leone, or arrange a gift for your loved ones back home.
                Tell us what you need and our Brookfields team will help you choose.
              </p>
              <div className="mt-6 space-y-3 text-sm text-white/90">
                <p><strong>For your home:</strong> mattresses, pillows and bedding.</p>
                <p><strong>For family overseas or back home:</strong> arrange a gift for delivery in Sierra Leone.</p>
                <p><strong>For carpenters:</strong> ask about current sheeting and cushion offers.</p>
              </div>
              <a href="#category" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#FFD6A5] underline underline-offset-4">
                Browse our usual categories <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
            <form className="rounded-2xl bg-white p-5 sm:p-7 text-[#2D1B69]" onSubmit={(event) => {
              event.preventDefault()
              window.location.assign(whatsapp)
            }}>
              <h3 className="text-xl font-bold">Start your Christmas order</h3>
              <p className="mt-2 text-sm text-gray-600">Complete your order request below, then send it to our team on WhatsApp. We will confirm your order and arrange payment directly with you.</p>
              <div className="mt-5 grid gap-4">
                <label className="grid gap-1 text-sm font-semibold">Product
                  <select value={product} onChange={(event) => setProduct(event.target.value)} className="w-full rounded-lg border border-gray-300 bg-white p-3 text-base font-normal">
                    {collections.map((item) => <option key={item}>{item}</option>)}
                  </select>
                </label>
                <label className="grid gap-1 text-sm font-semibold">Size or specification (optional)
                  <input value={size} onChange={(event) => setSize(event.target.value)} maxLength={120} placeholder="e.g. 4 x 6, or please advise" className="w-full rounded-lg border border-gray-300 p-3 text-base font-normal" />
                </label>
                <label className="grid gap-1 text-sm font-semibold">Quantity
                  <input type="number" min={1} max={1000} required value={quantity || ''} onChange={(event) => setQuantity(Number(event.target.value))} className="w-full rounded-lg border border-gray-300 p-3 text-base font-normal" />
                </label>
                <label className="grid gap-1 text-sm font-semibold">Who are you shopping for?
                  <select value={recipient} onChange={(event) => setRecipient(event.target.value)} className="w-full rounded-lg border border-gray-300 bg-white p-3 text-base font-normal">
                    <option>Shopping for myself / my household</option>
                    <option>Buying a gift for someone in Sierra Leone</option>
                    <option>Buying for my carpentry or upholstery business</option>
                  </select>
                </label>
                <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#08783E] px-4 py-3 font-semibold text-white hover:bg-[#065F32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  <MessageCircle size={20} aria-hidden="true" /> Order via WhatsApp
                </button>
                <p className="text-xs leading-relaxed text-gray-600">WhatsApp will open with your order details. Tap Send to reach our team. No online checkout or automatic payment is required. Your order is confirmed only after our team agrees the price, availability, payment and delivery or collection. WhatsApp: 076 271 771.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
