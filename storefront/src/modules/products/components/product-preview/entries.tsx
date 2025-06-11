import { Text, clx } from "@medusajs/ui"
import { entries } from "lodash"
import { VariantPrice } from "types/global"

export default async function PreviewEntries({
  price,
}: {
  price: VariantPrice
}) {
  if (!price) {
    return null
  }

  return (
    <>
      {price.price_type === "sale" && (
        <Text className="line-through" data-testid="original-price">
          {price.entries ? `${price.entries}x` : price.original_price}
        </Text>
      )}
      <Text
        className={clx(
          "text-ui-contrast-fg-primary bg-ui-bg-interactive px-2 font-display",
          {
            "text-ui-fg-interactive": price.price_type === "sale",
          }
        )}
        data-testid="price"
      >
        {price.entries ? `${price.entries}x` : price.calculated_price}
      </Text>
    </>
  )
}
