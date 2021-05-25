import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const {users, isFirst, isLoading, error} = this.props
    return (
      <div className="row">
        {
          isFirst ? <h2>输入关键词点击搜索</h2> :
          isLoading ? <h2>loading...</h2> :
          error ? <h2 style={{color: 'red'}}>{error}</h2> :
          users.map(userObj => {
            return (
              <div key={userObj.id} className="card">
                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                  <img alt="avatar" src={userObj.avatar_url} style={{ width: '100px' }} />
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
