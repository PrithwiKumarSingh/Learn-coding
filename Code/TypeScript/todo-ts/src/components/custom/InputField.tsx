import { Input } from "../ui/input"
import { Button } from "../ui/button"
const InputField = () => {
  return (
    <div className="flex flex-1 gap-5 mt-32">
      <Input type="text" name="todo" placeholder="enter your todo ...."/>
        <Button>Click Me</Button>
    </div>
  )
}

export default InputField