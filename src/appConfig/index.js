import parts from './parts.register'
import pages from './pages.register'
import options from './pages.config'

export default {
    parts,
    pages,
    options,
    // 系统默认配置
    config:{
        debug:false,
        stars:false,
        mock:true,
    }
}
