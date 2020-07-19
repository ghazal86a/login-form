import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Login from "@/components/Login.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

const mutations = {
  SET_USER_CONTACTS: jest.fn()
};

describe("Login.vue", () => {
  let state;
  let store;
  let actions;

  beforeEach(() => {
    state = {
      contacts: []
    };
    actions = {
      getUserContacts: jest.fn()
    };
    store = new Vuex.Store({
      state,
      actions,
      mutations
    });
  });

  it("Input fields exist", () => {
    const wrapper = shallowMount(Login, { store, localVue });

    const lastNameEl = wrapper.findAll("#lastname");
    expect(lastNameEl.length).toBe(1);

    const postCodeEl = wrapper.findAll("#postcode");
    expect(postCodeEl.length).toBe(1);

    const dobEl = wrapper.findAll("#dob");
    expect(dobEl.length).toBe(1);
  });

  it("validate lastname", () => {
    const wrapper = shallowMount(Login, { store, localVue });

    wrapper.vm.validateLastName("a name");
    expect(wrapper.vm.$data.errorMsg).toEqual({ lastName: "" });

    wrapper.vm.validateLastName(
      "mynameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
    );
    expect(wrapper.vm.$data.errorMsg).toEqual({
      lastName: "Last name should be less than 50 characters!"
    });
  });

  it("validate postCode", () => {
    const wrapper = shallowMount(Login, { store, localVue });

    wrapper.vm.validatePostCode("SW19 0PP");
    expect(wrapper.vm.$data.errorMsg).toEqual({ postCode: "" });

    wrapper.vm.validatePostCode("RANDOM");
    expect(wrapper.vm.$data.errorMsg).toEqual({
      postCode: "Not a Valid UK Post Code!"
    });
  });

  // TODO: test store actions/mutations being called correctly
});
