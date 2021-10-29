import {action, makeObservable, observable} from "mobx";
import person1 from '../static/img/person1.png'
import person2 from '../static/img/person2.png'
import person3 from '../static/img/person3.png'
import person4 from '../static/img/person4.png'
import person5 from '../static/img/person5.png'

class AppStore {
  userList = [
    {id: 1, name: 'David', img: person1, status: {msg: [{content: '111', time: '17:35'}]}},
    {id: 2, name: 'Jessica', img: person2, status: {msg: [{content: '222', time: '19:41'}]}},
    {id: 3, name: 'Cameron', img: person3, status: {msg: [{content: '333', time: '23:08'}]}},
    {id: 4, name: 'Adam', img: person4, status: {msg: [{content: '444', time: '12:28'}]}},
    {id: 5, name: 'Leo', img: person5, status: {msg: [{content: '555', time: '06:10'}]}},
  ]
  chatroom = ''

  constructor() {
    makeObservable(this, {
        userList: observable,
        chatroom: observable,
        addUserList: action.bound,
        changeChatroom: action.bound,
        sendMsg: action.bound
      }
    )
  }


  addUserList(e) {
    this.userList.push(e)
  }

  changeChatroom(e) {
    this.chatroom = e
  }

  sendMsg(e) {
    this.chatroom.status.msg.push({content: e, time: '00:00'})
  }
}

const store = new AppStore()
export default store
