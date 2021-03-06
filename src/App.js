import React, { Component} from 'react';
import axios from 'axios';
import './App.css';
import TaskList from "./components/TasksList/tasksList";
import Pagination from "./components/Pagination/pagination";
import CreateTask from "./components/CreateTask/createTask";
import Navbar from "./components/Navbar/navbar";
import Modal from "react-modal";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

export default class App extends Component {
  state = {
      tasks: [],
      total_task_count: null,
      page: 1,
      sort_field: "id",
      sort_direction: "asc",
      token: '',
      isModalOpen: false,
      isLogged: false,
      message: ''
  }

  componentDidMount() {
    axios
        .get(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Vitalii`)
        .then(res => {
            this.setState({
            tasks: res.data.message.tasks,
            total_task_count: Number(res.data.message.total_task_count)
          })
        })
  }



  getData = () => {
      let url = `https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Vitalii&page=${this.state.page}&sort_field=${this.state.sort_field}&sort_direction=${this.state.sort_direction}`
      axios
          .get(url)
          .then(res => {
              console.log(res);
              this.setState({
                  tasks: res.data.message.tasks,
              })
          })
  };

  pickPage = page => {
    axios
        .get(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Vitalii&page=${page}`)
        .then(res => {
          this.setState({
            tasks: res.data.message.tasks,
            page
          })
        })
  }


  changeSelect = async e => {
        let name = e.target.name;
        let value = e.target.value;
      await this.setState({
            [name] : value
      });
      this.getData();
  };

  createNewTask = task => {
      const formData = new FormData();
      formData.append("username", task.username);
      formData.append("email", task.email);
      formData.append("text", task.text);
      axios
      .post('https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=Vitalii',
          formData,
          {headers:{'Content-Type': "multipart/form-data",}})
          .then(({status, data}) => {
                if(status === 200) {
                    this.getData()
                }
          })
          .then(() => {
              this.setState({
                  message: 'Task added successfully'
              })
          })
          .then(() => this.openModal())
  };

  userLogin = user => {
      const formData = new FormData();
      formData.append("username", user.username);
      formData.append("password", user.password);
      axios
          .post('https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=Vitalii',
              formData,
              {headers:{'Content-Type': "multipart/form-data",}})
          .then(({data}) => {
              if(data.status !== 'error' ) {

                  this.setState({
                      token: data.message.token,
                      isLogged: true
                  })
              } else {
                    this.setState({
                        message: data.message.password,
                        isModalOpen: true
                    })
              }
          })
  };

    updateTask =( {status, text, id}) => {

        if(status) {
            status = 10
        } else {
            status = 0
        }

        const task = this.state.tasks.find(t => t.id === id);
        const taskToUpdate = { ...task, text, status  };

        const formData = new FormData();
        formData.append("token", this.state.token);
        formData.append("task ", taskToUpdate);
        // formData.append("text ", taskToUpdate.text);
        //
        // formData.append("status ", taskToUpdate.status);
        axios
            .post(`https://uxcandy.com/~shapoval/test-task-backend/v2/edit/${taskToUpdate.id}?developer=Vitalii`,
                formData,
                {headers:{'Content-Type': "multipart/form-data",}})
            .then(({status}) => {
                if(status === 200) {
                    this.getData()
                }
            })
    };

    openModal() {
        this.setState({isModalOpen: true});
    };

      closeModal = () => {
            this.setState({isModalOpen: false,
            message: ''});
      };

      logOut = () => {
          this.setState({
              token: '',
              isLogged: false
          })
      }

    render() {
    return (
        <div className="container">
          <div className="row">
              <div className="col-12">
                  <Navbar isLogged={this.state.isLogged} userLogin={this.userLogin} logOut={this.logOut} />
                <h1 className="text-center">Tasks App</h1>
                  < CreateTask createNewTask={this.createNewTask}/>
              </div>
              <div className="col-3 offset-9">
                  <label className="d-flex"> sort_field
                      <select
                          className="form-control form-control-sm ml-2"
                          value={this.state.sort_field}
                          name="sort_field"
                          onChange={this.changeSelect}
                      >
                          <option value="id">id</option>
                          <option value="username">username</option>
                          <option value="email">email</option>
                          <option value="status">status</option>
                      </select>
                  </label>

              </div>
              <div className="col-3 offset-9">
                  <label className="d-flex"> sort_direction
                      <select className="form-control form-control-sm ml-2"
                              value={this.state.sort_direction}
                              name="sort_direction"
                              onChange={this.changeSelect}
                      >
                          <option value="asc">asc</option>
                          <option value="desc">desc</option>
                      </select>
                  </label>

              </div>
            <div className="col-12">

              <TaskList
                  tasks={this.state.tasks}
                  isLogged={this.state.token}
                  updateTask={this.updateTask}
              />
              <Pagination
                  total_task_count={this.state.total_task_count}
                  page={this.state.page}
                  pickPage={this.pickPage}
              />
            </div>
          </div>
                <Modal
                    isOpen={this.state.isModalOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div className="m-4 p-4">{this.state.message}</div>
                    <button className="btn btn-primary" onClick={this.closeModal}>Ok</button>
                </Modal>
        </div>
    );
  }
};






