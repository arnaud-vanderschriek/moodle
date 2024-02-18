import { RematchDispatch } from '@rematch/core';
import { User } from '../../types';


// public int Id { get; set; }
// public string UserName { get; set; } = null!;
// public byte[] Password { get; set; } = null!;
// public string Email { get; set; } = null!;
// public int RoleID { get; set; }

// public Roles Role { get; set; } = null!;
// public ICollection<Courses> Courses { get; set; } = null!;  // !!! Attention rajouté après la migration
// public ICollection<AssessmentResult> AssessmentResults { get; set; } = null!;
// public ICollection<LearningProgress> LearningProgress { get; set; } = null!;

const INITIAL_STATE: User = {
    id: 0,
    name: '',
    email: '',
    roleID: 0,
};

const user = {
  name: 'user',
  state: INITIAL_STATE,
  reducers: {
    saveUser: (state: User, payload: User) => {   
        return { ...state, ...payload }
     },
    
  },
  effects: (dispatch: RematchDispatch<any>) => ({
    
  }),
};

export default user;
