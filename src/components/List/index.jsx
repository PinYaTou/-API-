/* eslint-disable jsx-a11y/anchor-is-valid */
//
import React from 'react'
import './index.css'
export default function List(props) {
  const { users, isFirst, isLoading, error } = props;
  return (
    <div className="showPart">
      {
        isFirst ? <h2>欢迎使用，请输入点击搜索</h2> :
          isLoading ? <h2>正在搜索，请稍等。。。</h2> :
            error ? <h2 style={{ color: 'red' }}>{error}</h2> :
              users.map((user) => {
                const data = user.data[0];
                return (
                  <div key={user.id} className="card">
                    <img alt='head-portrait' src={data.poster} />
                    <div className='content'>
                      <a href=""><p className="card-text">{user.alias}</p></a>
                      <p className='description'>{data.description}</p>
                      <p className='date'>{user.year}&nbsp;/&nbsp;{data.country}&nbsp;/&nbsp;{data.genre}</p>
                      <span className='score'>评分：{user.doubanRating}</span>
                      <span className='scorers'>{user.doubanVotes}人评价</span>
                    </div>
                  </div>
                )
              })
      }

    </div>
  )
}
