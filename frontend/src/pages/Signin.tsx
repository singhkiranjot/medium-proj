import { Auth } from "../component/Auth"
import { Quote } from "../component/Quotes"

export const Signin = () => {
    return <div className="grid  grid-cols-1 lg:grid-cols-2">
        <div>
        <Auth type="signin"></Auth>
        </div>
        <div className="hidden lg:block">
        <Quote/>
        </div>
    </div>
}