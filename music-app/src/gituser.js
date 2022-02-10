import React, {useState, useEffect} from "react";


const UserWrap =  {
    position: 'relative',
    padding: '20px',
    background: '#ccc',
    display: 'inline-block',
    margin: '20px',
}

const GitApi = () =>{
    
    const [AllUser, setAllUser] = useState([])

    const GitUser = async() =>{
        const response = await fetch('https://api.github.com/users');
        setAllUser(await response.json());
        // console.log(UserData)
    }

    useEffect(() => {
        GitUser();
    }, [])

    return(
        <>  
            <h1> https://api.github.com/users </h1>
            {
                AllUser.map(function(GitUser, index){
                    return(
                        <div className="User-Wrap" style={UserWrap}>
                                {GitUser.login} 
                            <div className="User-img">
                            
                            </div>
                            <div className="User-details">
                                {GitUser.avatar_url}
                            </div>
                        </div>
                    )
                })
            }
            
        </>
    )

}


export default GitApi;