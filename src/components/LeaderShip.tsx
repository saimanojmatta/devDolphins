'use client'
import { ExpandableCardDemo } from "./ExpanableCardDemo"

type Props = {}
const LeaderShip = (props: Props) => {
  return (
    <div id="leadership" className="flex flex-col items-center ">
      <h1 className=" m-8 heading">Meet Our
          <span className="text-purple"> Team</span>
        </h1>
      <ExpandableCardDemo/>
    </div>
  )
}
export default LeaderShip