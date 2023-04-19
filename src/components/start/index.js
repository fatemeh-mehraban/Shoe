import { onboarding1 } from '@/pages/onboarding1'
import {onboarding2} from '@/pages/onboarding2'
import {onboarding3} from '@/pages/onboarding3'
import {onboarding4} from '@/pages/onboarding4'
import {onboarding5} from '@/pages/onboarding5'
import { El } from '@/library';
export  const start = () => {
    const Start = El({
        element: 'div',
        id:"onboarding",
        className: '',
    });

        Start.appendChild(onboarding1())
          setTimeout(() => {
            Start.innerHTML=""
            Start.append(onboarding2())
          }, 3000);

          setTimeout(() => {
            Start.innerHTML=""
            Start.append(onboarding3())
          }, 5000);
            return Start
}