import React from "react"
import Accordion from "../Accordion/Accordion"

const Item = [
  {
    title: "Section 1",
    content: `Can I play a quiz more than once?
    Yes,You can play every quiz as many times as you like`,
  },
  {
    title: "Section 2",
    content: `How do I find quizzes on a particular subject?
    Navigating the site is easily done by clicking the buttons on the top of every page`,
  },
  {
    title: "Section 3",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
        quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
        dolor ut sequi minus iste? Quas?`,
  },
]

const FAQ = () => {
  return (
    <div className="container py-5">
      <h2 className="fat-text pb-2 border-bottom text-center">FAQ</h2>
      <div className="row justify-content-center py-5">
        {Item.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

export default FAQ
