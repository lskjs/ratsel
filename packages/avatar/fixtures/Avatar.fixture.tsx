import React from 'react';

import { BookmarkIcon } from '../assets/BookmarkIcon';
import { Avatar } from '../src';

const rndNum = Number(String(Math.random()).slice(2, 4));
const avatarImg = `https://randomuser.me/api/portraits/men/${rndNum}.jpg`;
const smallImg = 'http://placeimg.com/32/32/people';
const largeImg = 'http://placeimg.com/1920/1920/people';
const noProportionalImg = 'http://placeimg.com/640/320/people';

const user = () => ({
  id: Number(String(Math.random()).slice(2, 4)),
  title: 'John Smith',
  src: `https://randomuser.me/api/portraits/men/${Number(
    String(Math.random()).slice(2, 4),
  )}.jpg`,
});

export default {
  'Default as img (title,src)': (
    <>
      <Avatar title="John Smith" src={avatarImg} />
    </>
  ),
  Empty: (
    <>
      <Avatar src={null} />
    </>
  ),
  Size: (
    <>
      <Avatar {...user()} />
      <Avatar {...user()} size={32} />
      <Avatar {...user()} size={64} />
      <Avatar {...user()} size={100} />
      <Avatar {...user()} width={100} height={50} />
      <Avatar {...user()} width={50} height={100} />
    </>
  ),
  'Custom styles': (
    <>
      <div>
        <Avatar {...user()} style={{ margin: 10 }} />
        <Avatar {...user()} style={{ padding: 10 }} />
        <Avatar {...user()} style={{ border: '4px solid rgb(244, 67, 54)' }} />
        <Avatar
          {...user()}
          style={{ border: '4px solid rgba(128, 128, 128, 0.5)' }}
        />
        <Avatar
          {...user()}
          style={{ border: '4px solid rgba(128, 128, 128, 0.5)' }}
          src="//broken.site/img.png"
        />
      </div>
      <div>
        <Avatar
          {...user()}
          innerStyle={{ boxShadow: '1px 1px 10px 2px #333' }}
        />
        <Avatar {...user()} innerStyle={{ filter: 'grayscale(100%)' }} />
        <Avatar
          {...{
            id: Number(String(Math.random()).slice(2, 4)),
            title: 'John Smith',
          }}
          innerStyle={{ border: '4px solid rgb(244, 67, 54)' }}
        />
        <Avatar
          {...user()}
          innerStyle={{ border: '4px solid rgba(128, 128, 128, 0.5)' }}
          src="//broken.site/img.png"
        />
        <Avatar {...user()} innerStyle={{ border: '2px solid #4CAF50' }} />
        <Avatar {...user()} innerStyle={{ border: '4px solid #F44336' }} />
      </div>
    </>
  ),
  Shape: (
    <>
      <Avatar {...user()} shape="circle" />
      <Avatar {...user()} shape="square" />
      <Avatar {...user()} shape="rounded" />
    </>
  ),
  'Failed img': (
    <>
      <Avatar title="John Smith" src="/failed-img.png" />
    </>
  ),
  'No proportional': (
    <>
      <Avatar title="John Smith" src={smallImg} />
      <Avatar title="John Smith" src={largeImg} />
      <Avatar title="John Smith" src={noProportionalImg} />
      <Avatar
        title="John Smith"
        src={noProportionalImg}
        width={128}
        height={64}
      />
      <Avatar
        title="John Smith"
        src={noProportionalImg}
        shape="rounded"
        width={128}
        height={64}
      />
    </>
  ),
  'Add icon': (
    <>
      <Avatar
        title="John Smith"
        src={smallImg}
        icon={<BookmarkIcon />}
        iconColor="#fff"
        iconBackground="#7070ff"
        iconPosition="br"
      />
    </>
  ),
};
