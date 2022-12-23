import { defineComponent } from "vue";
import s from "./WelcomeLayout.module.scss";
import cloud from "../../assets/icons/cloud.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";

export const Forth = defineComponent({
  setup: (props, context) => {
    return () => (
      <WelcomeLayout>
        {{
          title: () => (
            <h2>
              每日提醒
              <br />
              不遗漏每一份账单
            </h2>
          ),
          icon: () => <img src={cloud} />,
          buttons: () => (
            <>
              <RouterLink class={s.fake} to="/start">
                跳过
              </RouterLink>
              <RouterLink to="/start">完成</RouterLink>
              <RouterLink class={s.fake} to="/start">
                跳过
              </RouterLink>
            </>
          ),
        }}
      </WelcomeLayout>
    );
  },
});
