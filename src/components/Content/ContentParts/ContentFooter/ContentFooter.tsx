import { useState } from "react"
import s from "./ContentFooter.module.css"

export const ContentFooter = () => {
  const [currentFilterId, setCurrentFilterId] = useState(1)

  const filters = [{id: 1, text: "All", href: "#/"},
  {id: 2, text: "Active", href: "#/active"},
  {id: 3, text: "Completed", href: "#/completed"},
]

  return <div className={s.form__footer}>

    <div className={s.footer__count}>
      <strong> 2 </strong> items left
    </div>

    <div className={s.footer__filters}>
      {filters.map(filter => {
        let cn = ""

        if (currentFilterId === filter.id) { cn = s.selected }

        return <div className={s.footer__filter} key={filter.id} onClick={e => setCurrentFilterId(filter.id)}>
          <a href={filter.href} className={cn}> {filter.text} </a>
        </div>
      })}
    </div>

    <div className={s.footer__clear}>
      <button className={s.footer__button + " " + s.hide}>Clear completed</button>
    </div>
</div>
}