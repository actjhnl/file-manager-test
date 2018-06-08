import * as act from '../constants';
export function addFile(file){
  return {
    type: act.ADD,
    file: file
  }
}
export function deleteFile(name){
  return {
    type: act.DELETE,
    name: name
  }
}
