// 引入api
// import {} from "@/api"

const state = {
    local:"第一展览厅"
}

const actions = {
    async test({commit}) {

    }
}

const mutations = {
    UPDATELOCAL(state,value) {
        state.local = value
    }
}

const getters = {}

export default ({
    namespaced:true,
    state,
    mutations,
    actions,
    getters
})