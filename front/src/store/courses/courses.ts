import { RematchDispatch } from '@rematch/core';
import { Courses } from '../../types';
import apiService from '../../services/ApiService';


const INITIAL_STATE: Courses = {
    id: 0,
    name: '',
    description: '',
    startDate: new Date(),
    endDate: new Date(),
    userID: 0
};

const courses = {
  name: 'courses',
  state: INITIAL_STATE,
  reducers: {
    saveCourses: (state: Courses, payload: Courses) => {   
        return { ...state, ...payload }
     },
    
  },
  effects: (dispatch: RematchDispatch<any>) => ({
    GetAllCourses: async () => {
      try {
          const response = await apiService.get("/Courses");
          const data = await response.data

          return data;
      } catch (error) {
          console.log("error in courses store: ", error)
      }
    },
    RegisterCourse: async (payload: Courses) => {
      try {
        const response = await apiService.post("Courses", payload);
        const data = await response.data;

        console.log(data, 'data in RegisterCourse func');
      } catch (error) {
        console.log("error, impossible d'ajouter un cours.");
      }
    }
  }),
};

export default courses;
