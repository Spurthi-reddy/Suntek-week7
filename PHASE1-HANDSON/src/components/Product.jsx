function Product({ product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-[0_16px_45px_-24px_rgba(180,83,9,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(180,83,9,0.45)]">
      <div className="aspect-square overflow-hidden bg-amber-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="space-y-3 p-5">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
            {product.brand}
          </p>
          <h2 className="text-lg font-bold leading-tight text-slate-900">{product.name}</h2>
        </div>

        <p className="text-sm leading-relaxed text-slate-600">{product.description}</p>

        <p className="pt-1 text-xl font-black text-amber-800">${product.price}</p>
      </div>
    </article>
  )
}

export default Product
