package tn.noteit.rest;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import tn.noteit.domain.Utilisateur;
import tn.noteit.service.INoteService;
import tn.noteit.service.IUtilisateurService;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;


@CrossOrigin(origins = "*" )
@RestController
@RequestMapping("utilisateurs")
public class UtilisateurRestController {
	
	
	@Autowired 
	IUtilisateurService utilisateurService;
	@Autowired
	INoteService livreService;
	
	
	@GetMapping
	public List<Utilisateur> getAllUsers(){
		return this.utilisateurService.getAllusers();
	}

	 
	  @PostMapping("/signin")
	  @ApiResponses(value = {//
	      @ApiResponse(code = 400, message = "Something went wrong"), //
	      @ApiResponse(code = 422, message = "Invalid username/password supplied")})
	  public Map<String,String> login(//
	      @ApiParam("email") @RequestParam String email, //
	      @ApiParam("password") @RequestParam String password) {
	    return Collections.singletonMap("token", utilisateurService.signin(email, password));
	  }

	  @PostMapping("/signup")
	  @ApiResponses(value = {//
	      @ApiResponse(code = 400, message = "Something went wrong"), //
	      @ApiResponse(code = 403, message = "Access denied"), //
	      @ApiResponse(code = 422, message = "Username is already in use"), //
	      @ApiResponse(code = 500, message = "Expired or invalid JWT token")})
	  public ResponseEntity<Map<String,String>> signup(@ApiParam("Signup User") @RequestBody Utilisateur user) {
	    return new ResponseEntity<Map<String,String>>(Collections.singletonMap("token", utilisateurService.signup(user)),HttpStatus.OK);
	  }

	
	@GetMapping(path="/getUser")
	public ResponseEntity<Utilisateur> getUser(@RequestParam(value="email", required=true) String email){
		Utilisateur user = this.utilisateurService.findByEmail(email).get();
		
			return new ResponseEntity<Utilisateur>(user,HttpStatus.OK);
		}
	
	@GetMapping(path="/checkMail")
	public ResponseEntity<Boolean> checkEmail(@RequestParam(value="email", required=true) String email
			){
		Optional<Utilisateur> opt = this.utilisateurService.findByEmail(email);
		if(opt.isPresent())
			return new ResponseEntity<Boolean>(true,HttpStatus.OK);
		else 
			return new ResponseEntity<Boolean>(false,HttpStatus.OK);

		}
	
	@PostMapping(path="/getUser")
	public ResponseEntity<Utilisateur> getUserp( @RequestBody Utilisateur user
			){
		Utilisateur userp = this.utilisateurService.findByEmailAndPassword(user.getEmail(),user.getPassword());
		
			return new ResponseEntity<Utilisateur>(userp,HttpStatus.OK);
		}
	
	@PostMapping(path="/create")
	public ResponseEntity<Utilisateur> create(@RequestBody Utilisateur utilisateur){
		
		try {
			this.utilisateurService.saveUser(utilisateur);
			return new ResponseEntity<Utilisateur>(utilisateur,HttpStatus.ACCEPTED);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);

		}
	}
	@GetMapping(path="/getbyemail/{email}")
	Optional<Utilisateur> findByEmail(@PathVariable("email") String email){
		return this.utilisateurService.findByEmail(email);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	

}
