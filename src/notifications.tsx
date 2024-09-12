import * as R from 'remeda'
export default function Notification() {
    const result = R.pipe([1,2,3], R.map(R.add(1)))
    return <div>Notifications. {result.join(', ')}</div>
}