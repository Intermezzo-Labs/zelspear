import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Heading, Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Link from "next/link"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="border-t border-ui-border-error w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus font-display  uppercase"
            >
              Zelspear
            </LocalizedClientLink>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 md:flex">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus ">Categories</span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li className="flex flex-col gap-2 txt-small" key={c.id}>
                        <LocalizedClientLink
                          className={clx("", children && "txt-small-plus")}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className=""
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus">Collections</span>
                <ul
                  className={clx("grid grid-cols-1 gap-2 txt-small", {
                    "grid-cols-2": (collections?.length || 0) > 3,
                  })}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className=""
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2 col-span-2">
              <span className="txt-small-plus ">
                Zelspear Nintendo Switch 2 Giveaway
              </span>

              <p className="text-xsmall-regular max-w-sm text-justify text-ui-fg-subtle">
                NO PURCHASE NECESSARY TO ENTER OR WIN. A PURCHASE WILL NOT
                INCREASE YOUR CHANCES OF WINNING. Open to legal residents of the
                50 United States, the District of Columbia, Canada and El
                Salvador. Void in Puerto Rico and US territories and where
                prohibited by law. Must be age of majority in state/province of
                residence or have parental permission to participate. Promotion
                ends 11:59 PM MST on 06/05/2025. Skill-testing question required
                if a Canadian resident is selected as potential winner. Maximum
                value of Grand Prize is $449.00 USD. Odds of winning depend upon
                the number of eligible purchase and non-purchase entries
                received.{" "}
                <Link
                  href="/giveaway"
                  className="underline text-ui-fg-interactive"
                >
                  See Official Rules
                </Link>{" "}
                for details including how to enter without making a purchase.
                Sponsor: Zelspear, San Salvador, El Salvador.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Zelspear. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
