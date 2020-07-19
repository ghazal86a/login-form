import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Verify from "@/components/Verify.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Login.vue", () => {
  let state;
  let store;
  let actions;

  beforeEach(() => {
    state = {
      userInfo: [
        {
          landline: "123",
          mobile: "456",
          email: "email"
        }
      ]
    };
    actions = {
      getUserContacts: jest.fn()
    };
    store = new Vuex.Store({
      state,
      actions
    });
  });

  it("verify form is not visible when no option is selected", () => {
    const wrapper = shallowMount(Verify, { store, localVue });
    const verifyForm = wrapper.find("div .verify");
    expect(verifyForm.isVisible()).toBe(false);
  });

  it("verify form is not visible when no option is selected", () => {
    const wrapper = shallowMount(Verify, {
      data() {
        return { picked: 456 };
      },
      store,
      localVue
    });
    const verifyForm = wrapper.find("div .verify");

    expect(verifyForm.isVisible()).toBe(true);
  });

  it("Input fields get correct values from store", () => {
    console.log(store.state.userInfo);
    const wrapper = shallowMount(Verify, { store, localVue });
    expect(wrapper.find("#landline").element.value).toEqual("123");
    expect(wrapper.find("#mobile").element.value).toEqual("456");
    expect(wrapper.find("#email").element.value).toEqual("email");
  });

  // TODO: test route navigation https://medium.com/@sarngru/vue-router-unit-testing-navigation-6cc0b0f86811
});
