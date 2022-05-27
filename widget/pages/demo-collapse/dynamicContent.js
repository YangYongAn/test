import {Loading, Result} from '../../components/avm-ui/avm-ui'
export class DynamicContent extends Component {
    data = {
    finished: false
  }

  setFinished = f => {
    this.data.finished = f
  }

  loadData = () => {
    setTimeout(() => {
      this.setFinished(true)
    }, 1000);
  }

  render = () => {
    this.loadData()
    return this.data.finished ? <Result status='success' title='处理成功' /> : <Loading />
  }
};